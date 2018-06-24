These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

第一步：把resources下的icon和splash换成当前APP的icon和splash，然后把resources下的android或ios文件夹删除。

第二部：在cli中，执行ionic cordova resources，会自动生成当前图片对应的icon和splash不同大小的图标和启动夜。

如果就想生成图标或启动页的话，可以执行ionic cordova resources  --icon  或 ionic cordova resources --splash，就可以单独生成图标或启动页。
