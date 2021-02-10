using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using PersonalSite.UI.MVC.Models;

namespace PersonalSite.UI.MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult ContactAjax(ContactViewModel cvm)
        {
            string body = $"{cvm.Name} has sent you the following message: <br/>{cvm.Message} <strong> from the email address:</strong> {cvm.Email}";

            MailMessage m = new MailMessage("Admin@codingbyjames.com", "james.e.glover57@gmail.com", cvm.Subject, body);

            m.IsBodyHtml = true;

            m.Priority = MailPriority.High;

            m.ReplyToList.Add(cvm.Email);

            SmtpClient client = new SmtpClient("mail.codingbyjames.com");

            client.Credentials = new NetworkCredential("Admin@codingbyjames.com", "*James*1979");

            client.Port = 8889;
            try
            {
                client.Send(m);
            }
            catch (Exception ex)
            {
                ViewBag.message = $"We're sorry your request cannot be sent at this time. Please try again later. <br/>Error Message: <br/>{ex.StackTrace}";
            }

            return Json(cvm);
        }
        
    }
}