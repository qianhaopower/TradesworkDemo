using System.Web;
using System.Web.Optimization;

namespace AdminWebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery/jquery-2.1.1.min.js",
                        "~/Scripts/jquery/jquery-ui-1.10.4.min.js",
                        "~/Scripts/jquery/jquery.ui.touch-punch.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));


            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                       "~/Scripts/App/app.js",
                    
                 //controllers
                 "~/Scripts/App/controllers/*.js",
                     "~/Scripts/App/config.js",
                         "~/Scripts/App/directives.js",
                          "~/Scripts/App/inspinia.js",
                          //directives
                 "~/Scripts/App/directives/*.js",
                 //services
                 "~/Scripts/App/services/*.js",
                  //other
                  "~/Scripts/App/other/*.js"


                       ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap/bootstrap.js",
                      "~/Scripts/bootstrap/respond.js"

               ));


            bundles.Add(new ScriptBundle("~/bundles/plugin").Include(
                 
                  "~/Scripts/plugins/metisMenu/jquery.metisMenu.js",
                  "~/Scripts/plugins/slimscroll/jquery.slimscroll.min.js",
                 // "~/Scripts/plugins/pace/pace.min.js",
                   "~/Scripts/plugins/oclazyload/dist/ocLazyLoad.min.js",
                     "~/Scripts/plugins/angular.treeview.js",
                      "~/Scripts/plugins/angular-ui-tree.js",
                      "~/Scripts/plugins/ui-bootstrap-tpls-1.1.2.min.js",
                      "~/Scripts/plugins/angular-dragdrop.min.js"
          

            ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                 "~/Scripts/angular/angular.min.js",
                "~/Scripts/ui-router/angular-ui-router.min.js",
                 "~/Scripts/angular/angular-resource.min.js"


          ));
           




            bundles.Add(new StyleBundle("~/Content/css").Include(
                   "~/Content/bootstrap.css",
                   "~/Content/style.css",
                   "~/Content/animate.css",
                      "~/Content//plugins/*.css"));
        }
    }
}
