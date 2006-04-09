#
# Find the native FREETYPE includes and library
#

# This module defines
# FREETYPE_INCLUDE_DIR, where to find ft2build.h, ftheader.h, ...
# FREETYPE_LIBRARIES, the libraries to link against to use FREETYPE.
# FREETYPE_FOUND, If false, do not try to use FREETYPE.

# also defined, but not for general use are
# FREETYPE_LIBRARY, where to find the FREETYPE library.

FIND_PATH(FREETYPE_INCLUDE_DIR_FT2BUILD ft2build.h
  /usr/include/
  /usr/local/include/
)

FIND_PATH(FREETYPE_INCLUDE_DIR_FTHEADER freetype/config/ftheader.h
  /usr/include/freetype2
  /usr/local/include/freetype2
)

FIND_LIBRARY(FREETYPE_LIBRARY freetype
  PATHS /usr/lib /usr/local/lib
)

SET(FREETYPE_FIND_QUIETLY 1)

IF (FREETYPE_LIBRARY)
  IF (NOT FREETYPE_FIND_QUIETLY)
    MESSAGE(STATUS "Found Freetype2: ${FREETYPE_LIBRARY}")
  ENDIF (NOT FREETYPE_FIND_QUIETLY)
  IF (FREETYPE_INCLUDE_DIR_FTHEADER AND FREETYPE_INCLUDE_DIR_FT2BUILD)
    SET( FREETYPE_FOUND "YES" )
    SET( FREETYPE_INCLUDE_DIR
      ${FREETYPE_INCLUDE_DIR_FT2BUILD}
      ${FREETYPE_INCLUDE_DIR_FTHEADER} )
    SET( FREETYPE_LIBRARIES ${FREETYPE_LIBRARY} )
    FIND_PROGRAM(FREETYPE_CONFIG NAMES freetype-config PATHS ${prefix}/bin ${exec_prefix}/bin /usr/local/bin /opt/local/bin /usr/bin /usr/nekoware/bin /usr/X11/bin)
    EXEC_PROGRAM(${FREETYPE_CONFIG} ARGS --libs OUTPUT_VARIABLE LIBFREETYPE_LIBS)
    EXEC_PROGRAM(${FREETYPE_CONFIG} ARGS --cflags OUTPUT_VARIABLE LIBFREETYPE_CFLAGS)
  ENDIF (FREETYPE_INCLUDE_DIR_FTHEADER AND FREETYPE_INCLUDE_DIR_FT2BUILD)
ENDIF (FREETYPE_LIBRARY)