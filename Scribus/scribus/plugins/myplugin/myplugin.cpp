/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "myplugin.h"
#include "mypluginimpl.h"

// See scplugin.h and pluginmanager.{cpp,h} for detail on what these methods
// do. That documentatation is not duplicated here.
// Please don't implement the functionality of your plugin here; do that
// in mypluginimpl.h and mypluginimpl.cpp .

MyPlugin::MyPlugin() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place.
	languageChange();
}

MyPlugin::~MyPlugin() {};

void MyPlugin::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	m_actionInfo.name = "MyPlugin";
	// Action text for menu, including &accel
	m_actionInfo.text = tr("My &Plugin");
	// Menu
	m_actionInfo.menu = "Extras";
	// If needed, what item to add the menu item after
	//m_actionInfo.menuAfterName = "ColorWheel"
	// If needed, the keyboard shortcut for the plugin
	//m_actionInfo.keySequence = "CTRL+ALT+F3"
	// Should the menu item be enabled when the app starts
	// (even without a document open) ?
	m_actionInfo.enabledOnStartup = true;
}

const QString MyPlugin::fullTrName() const
{
	return QObject::tr("My Plugin");
}

const ScActionPlugin::AboutData* MyPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	Q_CHECK_PTR(about);
	return about;
}

void MyPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

bool MyPlugin::run(ScribusDoc* doc, QString target)
{
	MyPluginImpl *myPluginImpl = new MyPluginImpl();
	Q_CHECK_PTR(myPluginImpl);
	bool result = myPluginImpl->run(target, doc);
	delete myPluginImpl;
	return result;
}

// Low level plugin API
int myplugin_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* myplugin_getPlugin()
{
	MyPlugin* plug = new MyPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void myplugin_freePlugin(ScPlugin* plugin)
{
	MyPlugin* plug = dynamic_cast<MyPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}
