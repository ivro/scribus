/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef SCIMAGE_H
#define SCIMAGE_H

#include "scconfig.h"
#include "scribusapi.h"

#include <setjmp.h>
#include <cstdlib>
#include <cmath>
#ifdef HAVE_UNISTD_H
#include <unistd.h>
#endif
//#include <valarray>
#include <qmemarray.h>
#include <qimage.h>
#include <qstring.h>
#include <qdatastream.h>
#include <qmap.h>
#include <qvaluelist.h>
#include <qfile.h>
#include <qdir.h>
#include <qstringlist.h>
#include "fpointarray.h"
#include "sccolor.h"
extern "C"
{
#define XMD_H           // shut JPEGlib up
#if defined(Q_OS_UNIXWARE)
#  define HAVE_BOOLEAN  // libjpeg under Unixware seems to need this
#endif
#include <jpeglib.h>
#include <jerror.h>
#undef HAVE_STDLIB_H
#ifdef const
#  undef const          // remove crazy C hackery in jconfig.h
#endif
}
#ifdef HAVE_TIFF
	#include <tiffio.h>
#endif

class SCRIBUS_API ScImage : public QImage
{
public:
	ScImage();
	ScImage(const QImage & image);
	ScImage( int width, int height );
	~ScImage();

	enum RequestType
	{
		CMYKData = 0,
		RGBData = 1,
		RGBProof = 2,
		RawData = 3,
		Thumbnail = 4,
	};

	enum PSDColorMode
	{
		CM_BITMAP = 0,
		CM_GRAYSCALE = 1,
		CM_INDEXED = 2,
		CM_RGB = 3,
		CM_CMYK = 4,
		CM_MULTICHANNEL = 7,
		CM_DUOTONE = 8,
		CM_LABCOLOR = 9
	};

	enum ImageEffectCode
	{
		EF_INVERT = 0,
		EF_GRAYSCALE = 1,
		EF_COLORIZE = 2,
		EF_BRIGHTNESS = 3,
		EF_CONTRAST = 4,
		EF_SHARPEN = 5,
		EF_BLUR = 6,
		EF_SOLARIZE = 7
	};

	struct imageEffect
	{
		int effectCode;
		QString effectParameters;
	};
	void initialize();

	// Routines for PDF/PS output of images
	QByteArray ImageToArray();
	QByteArray ImageToGray();
	QByteArray ImageToCMYK_PS(int pl, bool pre);
	QByteArray ImageToCMYK_PDF(bool pre);
	QByteArray getAlpha(QString fn, bool PDF, bool pdf14, int gsRes = 72);
	void Convert2JPG(QString fn, int Quality, bool isCMYK, bool isGray);

	// Image effects
	void applyEffect(QValueList<imageEffect> effectsList, QMap<QString,ScColor> colors, bool cmyk);

	// Generate a low res image for user preview
	void createLowRes(double scale);

	// Scale this image in-place
	void scaleImage(int width, int height);

	// Retrieve an embedded ICC profile from the file path `fn', storing it in `profile'.
	// TODO: Bad API. Should probably be static member returning an ICCProfile (custom class) or something like that.
	void getEmbeddedProfile(const QString & fn, QString *profile, int *components);

	// Retrieve an embedded ICC profile from the file path `fn', storing it in `profile'.
	// TODO: Bad API. Should probably be static member returning an ICCProfile (custom class) or something like that.
	void getEmbeddedProfile(const QString & fn, QByteArray *profile, int *components);

	// Load an image into this ScImage instance
	// TODO: document params, split into smaller functions
	bool LoadPicture(const QString & fn, const QString & Prof, int rend, bool useEmbedded, bool useProf, RequestType requestType, int gsRes, bool *realCMYK = 0);

	struct PSDLayer
	{
		QValueList<uint> channelLen;
		QValueList<int> channelType;
		int xpos;
		int ypos;
		int width;
		int height;
		ushort opacity;
		uchar clipping;
		uchar flags;
		int maskXpos;
		int maskYpos;
		int maskWidth;
		int maskHeight;
		QString layerName;
		QString blend;
		QImage thumb;
	};

	struct PSDHeader
	{
		uint signature;
		ushort version;
		uchar reserved[6];
		ushort channel_count;
		uint height;
		uint width;
		ushort depth;
		ushort color_mode;
	};
	
	struct LoadRequest
	{
		bool visible;
		ushort opacity;
		QString blend;
	};

	struct ExifValues
	{
		int width;
		int height;
		QString cameraName;
		QString cameraVendor;
		QString comment;
		QString userComment;
		QString artist;
		QString copyright;
		QString dateTime;
		QImage thumbnail;
	};

	struct ImageInfoRecord
	{
		int typ;			/* 0 = jpg, 1 = tiff, 2 = psd, 3 = eps/ps, 4 = pdf, 5 = jpg2000, 6 = other */
		int xres;
		int yres;
		int BBoxX;
		int BBoxH;
		int colorspace; /* 0 = RGB  1 = CMYK  2 = Grayscale */
		bool valid;
		bool isRequest;
		bool progressive;
		bool isEmbedded;
		bool exifDataValid;
		int lowResType; /* 0 = full Resolution, 1 = 72 dpi, 2 = 36 dpi */
		double lowResScale;
		QMap<QString, FPointArray> PDSpathData;
		QMap<int, LoadRequest> RequestProps;
		QString clipPath;
		QString usedPath;
		QString profileName;
		QValueList<PSDLayer> layerInfo;
		ExifValues exifInfo;
	} imgInfo;

private:
	// Image effects
	void solarize(double factor, bool cmyk);
	void blur(double radius= 0.0, double sigma = 1.0);
	void sharpen(double radius= 0.0, double sigma = 1.0);
	void contrast(int contrastValue, bool cmyk);
	void brightness(int brightnessValue, bool cmyk);
	void invert(bool cmyk);
	void colorize(ScColor color, int shade, bool cmyk);
	void toGrayscale(bool cmyk);
	void swapRGBA();

	// Misc implementation
	void liberateMemory(void **memory);
	void blurScanLine(double *kernel, int width, unsigned int *src, unsigned int *dest, int columns);
	int getBlurKernel(int width, double sigma, double **kernel);
	bool convolveImage(QImage *dest, const unsigned int order, const double *kernel);
	int getOptimalKernelWidth(double radius, double sigma);
	void applyCurve(bool cmyk);
	bool IsValid( const PSDHeader & header );
	bool IsSupported( const PSDHeader & header );
	unsigned char INT_MULT ( unsigned char a, unsigned char b );
	void RGBTOHSV ( uchar& red, uchar& green, uchar& blue );
	void HSVTORGB ( uchar& hue, uchar& saturation, uchar& value );
	void RGBTOHLS ( uchar& red, uchar& green, uchar& blue );
	int HLSVALUE ( double n1, double n2, double hue );
	void HLSTORGB ( uchar& hue, uchar& lightness, uchar& saturation );
	bool loadChannel( QDataStream & s, const PSDHeader & header, QValueList<PSDLayer> &layerInfo, uint layer, int channel, int component, QImage &tmpImg);
	bool loadLayerChannels( QDataStream & s, const PSDHeader & header, QValueList<PSDLayer> &layerInfo, uint layer, bool* firstLayer);
	bool loadLayer( QDataStream & s, const PSDHeader & header);
	QString getLayerString(QDataStream & s);
	QString getPascalString(QDataStream & s);
	void parseRessourceData( QDataStream & s, const PSDHeader & header, uint size);
	bool parseLayer( QDataStream & s, const PSDHeader & header);
	bool LoadPSD( QDataStream & s, const PSDHeader & header);
	bool marker_is_icc (jpeg_saved_marker_ptr marker);
	bool marker_is_photoshop (jpeg_saved_marker_ptr marker);
	bool read_jpeg_marker (UINT8 requestmarker, j_decompress_ptr cinfo, JOCTET **icc_data_ptr, unsigned int *icc_data_len);
	char* iccbuf;
	uint icclen;
	//std::valarray<int> curveTable;
	QMemArray<int> curveTable;
	QValueList<unsigned int> colorTable;
	int random_table[4096];
	
};
#endif
