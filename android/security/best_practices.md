# [App Security Best Practices](https://developer.android.google.cn/topic/security/best-practices#java)

## Enforce secure communication 
### Use implicit intents and non-exported content providers
+ Show an app chooser
+ Apply signature-based permissions
+ Disallow access to your app's content providers
  > Before Android 4.1.1, the `android:exported` attribute of the `<provider>` is ture by default.
### Apply network security meatures
+ Use SSL traffic
+ Add network security configuration
+ Create your own trust manager
### Use WebView objects carefully
you should never enable JavaScript interface support unless you completely control and trust the content in your app's WebView objects.
+ Use HTML message channels
  > Android 6.0 (API level 23) and higher, use HTML message channels instead of `evaluateJavascript()` to communicate between a website and your app
## Provide the right permission


## Store data safely


## Keep services and dependencies up-to-date
