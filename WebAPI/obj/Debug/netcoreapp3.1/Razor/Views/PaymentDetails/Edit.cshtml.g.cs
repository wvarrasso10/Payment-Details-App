#pragma checksum "C:\Users\wvarr\source\repos\WebAPI\WebAPI\Views\PaymentDetails\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8c6eac77f00f8c94d238cac483aa8cd86490156c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PaymentDetails_Edit), @"mvc.1.0.view", @"/Views/PaymentDetails/Edit.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8c6eac77f00f8c94d238cac483aa8cd86490156c", @"/Views/PaymentDetails/Edit.cshtml")]
    public class Views_PaymentDetails_Edit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<WebAPI.Models.PaymentDetail>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\wvarr\source\repos\WebAPI\WebAPI\Views\PaymentDetails\Edit.cshtml"
  
    ViewData["Title"] = "Edit";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Edit</h1>

<h4>PaymentDetail</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Edit"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <input type=""hidden"" asp-for=""PMId"" />
            <div class=""form-group"">
                <label asp-for=""CardOwnerName"" class=""control-label""></label>
                <input asp-for=""CardOwnerName"" class=""form-control"" />
                <span asp-validation-for=""CardOwnerName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""CardNumber"" class=""control-label""></label>
                <input asp-for=""CardNumber"" class=""form-control"" />
                <span asp-validation-for=""CardNumber"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""ExpirationDate"" class=""control-label""></label>
                <input asp-for=""ExpirationDate"" class=""form-c");
            WriteLiteral(@"ontrol"" />
                <span asp-validation-for=""ExpirationDate"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""CVV"" class=""control-label""></label>
                <input asp-for=""CVV"" class=""form-control"" />
                <span asp-validation-for=""CVV"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Save"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 48 "C:\Users\wvarr\source\repos\WebAPI\WebAPI\Views\PaymentDetails\Edit.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<WebAPI.Models.PaymentDetail> Html { get; private set; }
    }
}
#pragma warning restore 1591