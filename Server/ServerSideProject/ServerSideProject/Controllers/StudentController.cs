using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerSideProject.Data;
using ServerSideProject.Models;

namespace ServerSideProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public readonly DataContext _dataContext;
        public StudentController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost]
        [Route("Register")]
        //Post: api/Student/Register 
        //Http call to register a new user
        public async Task<Object> Register(StudentModelRegister newStudent)
        {
            Student student = new Student
            {
                Email = newStudent.Email,
                Class = newStudent.Class,
                Name = newStudent.Name,
                //Activities = new DbSet<Activity>(),
                Password = HashMD5(newStudent.Password)
            };

            try
            {
                _dataContext.Students.Add(student);
                await _dataContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                return BadRequest();
            }
            return Ok(student);
        }

        [HttpPost]
        [Route("Login")]
        //Post: api/Student/Login 
        //Http call to login a user
        public async Task<Object> Login(StudentModelLogin loggedStudent)
        {
            try
            {
                var foundStudent = _dataContext.Students.FirstOrDefault(student => student.Email == loggedStudent.Email);

                if (foundStudent == null)
                    return BadRequest();

                if(foundStudent.Password == HashMD5(loggedStudent.Password))
                    return Ok(foundStudent);

                return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest();
            }      
        }

        [HttpPost]
        [Route("AddActivity")]
        //Post: api/Student/Login 
        //Http call to login a user
        public async Task<Object> AddActivity(NewActivityModel newActivity)
        {
            Activity activity = new Activity
            {
                ActivityName = newActivity.ActivityName,
                CreatorName = newActivity.User.Name,
                IsActivated = false,
                MaximumAttenders = newActivity.MaximumAttenders,
                CreatorId = newActivity.User.Id,
                Description = newActivity.Description
            };

            try
            {
                _dataContext.Activities.Add(activity);
                await _dataContext.SaveChangesAsync();
                return Ok(activity);
            }
            catch (Exception)
            {
                return BadRequest(null);
            }
        }

        [HttpGet]
        [Route("GetActivities")]
        //GET: api/Student/GetActivities 
        //Http call to login a user
        public async Task<Object> GetActivities()
        {
            try
            {
                //All activties that Activated manually (from database)
                //return _dataContext.Activities.Where(p=> p.IsActivated).ToList();

                return _dataContext.Activities.ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public string HashMD5(string password)
        {
            MD5CryptoServiceProvider md5Hasher = new MD5CryptoServiceProvider();
            byte[] data = md5Hasher.ComputeHash(Encoding.Default.GetBytes(password));
            StringBuilder sBuilder = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
                sBuilder.Append(data[i].ToString("x2"));
            return sBuilder.ToString();
        }

        [HttpPost]
        [Route("Attend")]
        public async Task<Object> Attend(AttendModel modelAttended)
        {
            try
            {
                var activity = _dataContext.Activities.FirstOrDefault(a => a.Id == modelAttended.Id);

                if (activity == null)
                    return BadRequest(null);

                var studentfound = _dataContext.Students.FirstOrDefault(a => a.Id == modelAttended.userConnected.Id);

                if (studentfound == null)
                    return BadRequest(null);

               // var isRegistered = studentfound.Activities.FirstOrDefault(a => a.Id == activity.Id);

                //if (isRegistered != null)
                //    return BadRequest(null);  

                activity.Attenders++;
                ////if (studentfound.Activities == null)
                ////    studentfound.Activities = new DbSet<Activity>();

                await _dataContext.SaveChangesAsync();
                return Ok(studentfound);
            }
            catch (Exception)
            {
                return BadRequest(null);
            }
        }
    }
}