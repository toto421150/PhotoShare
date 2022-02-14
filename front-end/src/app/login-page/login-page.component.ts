import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  if(window.sessionStorage.getItem('username')!= null){
    this.logged = true
    this.name=window.sessionStorage.getItem("username")
    }else{
      this.logged = false
    }
  }

  logged=false
  name:any

  login(){
    if(this.logged==false){
      window.sessionStorage.setItem('username',this.name)
      window.location.href = '/photos';
    }else{
      window.sessionStorage.removeItem('username')
      window.location.reload()

    }
  }
}


// constructor(private service:RestapiService,private tokenservice:TokenStorageService) { }
// ngOnInit(): void {
//   if(window.sessionStorage.getItem('role')!= null){
//     this.logged =true
//   }
//   this.currentUsername=window.sessionStorage.getItem("username")
//   this.currentUserRole=window.sessionStorage.getItem('role')
// }

// currentUsername:any;
// currentUserRole:any;
// inputUsername:string="";
// inputPassword:string="";
// // inputUsername:string="Ruben.Feliciano";
// // inputPassword:string="password";

// doLogin() {
// let resp= this.service.login(this.inputUsername,this.inputPassword);
// resp.subscribe(data=>{
//     // console.log(data)
//     // console.log(window.sessionStorage.getItem('role'))
//     window.sessionStorage.setItem('pass',this.inputPassword)
//     window.sessionStorage.setItem('access_token',JSON.parse((JSON.stringify(data))).accessToken)
//     window.sessionStorage.setItem('role',data.roles)
//     window.sessionStorage.setItem('username',data.username)
//     window.sessionStorage.setItem('id',data.id)

//     window.location.pathname = "/time";
//   }
//   ,error => alert("User not found / Password Incorrect"))
// }

// deconnection(){
//   window.sessionStorage.removeItem('pass')
//   window.sessionStorage.removeItem('access_token')
//   window.sessionStorage.removeItem('role')
//   window.sessionStorage.removeItem('username')
//   window.sessionStorage.removeItem('id')
//   window.location.reload();
// }

// logged = false
// }