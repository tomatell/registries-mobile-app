package com.unionsoft.MemberyMobile;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.*;
import org.xwalk.core.XWalkPreferences;
import org.xwalk.core.XWalkResourceClient;
import org.xwalk.core.XWalkUIClient;
import org.xwalk.core.XWalkView;
import org.crosswalk.engine.*;
import android.webkit.ValueCallback;
import android.webkit.WebResourceResponse;
import android.content.Intent;
import android.util.Log;

public class MemberyActivity extends CordovaActivity {
		private XWalkCordovaView mXwalkView;

	   class MemberyResourceClient extends XWalkResourceClient {
			MemberyResourceClient(XWalkCordovaView view) {
               super(view);
           }
            @Override
            public boolean shouldOverrideUrlLoading(XWalkView view, String url) {
                if(url.equalsIgnoreCase("app://index")) {
                    Log.d("DEBUG", url);

                    loadUrl(Config.getStartUrl());

                    return true;
                } else {
                    return super.shouldOverrideUrlLoading(view, url);
                }
            }

       }

       class MemberyUIClient extends XWalkUIClient {
           MemberyUIClient(XWalkView view) {
               super(view);
           }

           //@Override
           //void onFullscreenToggled(XWalkView view, String url) {
               // Handle it here.
               
           //}
       }

       @Override
       public void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           XWalkPreferences.setValue(XWalkPreferences.REMOTE_DEBUGGING, true);
           //mXwalkView = new XWalkView(this, this);
           //setContentView(mXwalkView);
           mXwalkView.setResourceClient(new MemberyResourceClient(mXwalkView));
           mXwalkView.setUIClient(new MemberyUIClient(mXwalkView));
           mXwalkView.load("file:///android_asset/www/index.html", null);
           //this = mXwalkView;
           //loadUrl(Config.getStartUrl());
       }

       /*@Override
       protected void onActivityResult(int requestCode, int resultCode, Intent data) {
           if (mXwalkView != null) {
               mXwalkView.onActivityResult(requestCode, resultCode, data);
           }
       }

       @Override
       protected void onNewIntent(Intent intent) {
           if (mXwalkView != null) {
               mXwalkView.onNewIntent(intent);
           }
       }*/
   }