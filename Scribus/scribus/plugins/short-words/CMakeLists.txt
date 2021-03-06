INCLUDE_DIRECTORIES(
${CMAKE_SOURCE_DIR}
${CMAKE_SOURCE_DIR}/scribus
)

SET(SHORTWORDS_PLUGIN_UI_SRC
  swdialog.ui
)

SET(SHORTWORDS_PLUGIN_MOC_CLASSES
  configuration.h
  parse.h
  shortwords.h
  swprefsgui.h
  vlnadialog.h
)

SET(SHORTWORDS_PLUGIN_SOURCES
  configuration.cpp
  parse.cpp
  shortwords.cpp
  swprefsgui.cpp
  vlnadialog.cpp
)

SET(SCRIBUS_SHORTWORDS_PLUGIN "scribusshortwords")

QT4_WRAP_UI(SHORTWORDS_PLUGIN_UI_SOURCES ${SHORTWORDS_PLUGIN_UI_SRC} )
QT4_WRAP_CPP(SHORTWORDS_PLUGIN_MOC_SOURCES ${SHORTWORDS_PLUGIN_MOC_CLASSES})

ADD_LIBRARY(${SCRIBUS_SHORTWORDS_PLUGIN} MODULE
${SHORTWORDS_PLUGIN_SOURCES}
${SHORTWORDS_PLUGIN_MOC_SOURCES}
${SHORTWORDS_PLUGIN_UI_SOURCES})

TARGET_LINK_LIBRARIES(${SCRIBUS_SHORTWORDS_PLUGIN} ${PLUGIN_LIBRARIES})

INSTALL(TARGETS ${SCRIBUS_SHORTWORDS_PLUGIN}
  LIBRARY
  DESTINATION ${PLUGINDIR}
  PERMISSIONS ${PLUGIN_PERMISSIONS}
)

INSTALL(FILES scribus-short-words.rc
  DESTINATION ${SHAREDIR}/plugins
)

ADD_DEPENDENCIES(${SCRIBUS_SHORTWORDS_PLUGIN} ${EXE_NAME})

# SET_TARGET_PROPERTIES(${SCRIBUS_FONTPREVIEW_PLUGIN} PROPERTIES VERSION "0.0.0")
