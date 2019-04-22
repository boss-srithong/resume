import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <div className="basicInfo">
            <img className="profileImage"  alt="profile" src="https://image.freepik.com/free-vector/smiling-samoyed-dog-face-flat-design_42750-211.jpg"/>
            <h1>Peerapong Srithong</h1>
            <h2>Programmer</h2>
            <div className="contact">
              <div className="rowInfo">
                <p className="p label">Email</p>
                <p className="p label">srithong.boss@gmail.com</p>
              </div>
              <div className="rowInfo">
                <p className="p label">Address</p>
                <p className="p label">Nonthaburi,&nbsp;Thailand</p>
              </div>
            </div>
            <div className="socialIcons">
                <a href="https://github.com/srithong.boss" >
                    <i className="fa fa-github fa-4x icon socialIcon"></i>
                </a>
                <a href="https://www.facebook.com/bosspeerapong.sritong" >
                    <i className="fa fa-facebook-square  fa-4x icon socialIcon"></i>
                </a>
            </div>
          </div>
          <div className="profile">
            <h1 className="title">Profile</h1>
            <p>I like to solve problem and learn new things.</p>
            <p>And I like to share knowledge when I learn new things</p>
            <p>I am happy when I develop and maintain some products that can solve real problem.</p>
          </div>
          <div className="skills">
            <h1 className="title">Technical Skills</h1>
            <div className="rowSkill">
              <p className="language">JavaScript</p>
              <div className="star">
                <i className="fa fa-star fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
              </div>
            </div>
            <div className="rowSkill">
              <p className="language">HTML / CSS</p>
              <div className="star">
                <i className="fa fa-star fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
              </div>
            </div>
            <div className="rowSkill">
              <p className="language">PHP</p>
              <div className="star">
                <i className="fa fa-star fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
              </div>
            </div>
            
            <h1 className="title">Language Skills</h1>
            <div className="rowSkill">
              <p className="language">Thai (Native)</p>
              <div className="star">
                <i className="fa fa-star fa-lg"></i>
                <i className="fa fa-star fa-lg"></i>
                <i className="fa fa-star fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
              </div>
            </div>
            <div className="rowSkill">
              <p className="language">English</p>
              <div className="star">
                <i className="fa fa-star fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
                <i className="fa fa-star-o fa-lg"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
           <div className="experience">
             <h1 className="title">Experience</h1>
             <div className="exHeader">
              <h2 className="exTitle">Programmer, Precise</h2>
              <p className="exTime">Feb 2019</p>
             </div>
             <ui>
               <li className="exListItem">Develop web application with PHP</li>
               <li className="exListItem">Develop web application with PHP</li>
               <li className="exListItem">Develop web application with PHP</li>
             </ui>
          </div>
          <div className="education">
             <h1 className="title">Education</h1>
             <div className="eduHeader">
              <h2 className="eduTitle">Bachelor's Degree in Computer Engineering, Suranaree University</h2>
              <p className="eduTime">2014-2018</p>
             </div>
             <p className="eduAddress">Nakhon Ratchasima, Thailand</p>
          </div>
          <div className="interests">
             <h1 className="title">Interests</h1>
             <div className="interestsList">
                <div className="icons">
                  <i className="fa fa-book fa-4x icon"></i>
                  <p>reading books</p>
                </div>  
                <div className="icons">
                  <i className="fa fa-music fa-4x icon"></i>
                  <p>listening to music</p>
                </div> 
                <div className="icons">
                  <i className="fa fa-life-ring  fa-4x icon"></i>
                  <p>play sports</p>
                </div> 
                <div className="icons">
                  <i className="fa fa-gamepad fa-4x icon"></i>
                  <p>play a game</p>
                </div> 
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
