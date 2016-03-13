using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AdminWebApp.Startup))]
namespace AdminWebApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
