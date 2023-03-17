import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CancelOrderNotpayedComponent } from './cancel-order-notpayed/cancel-order-notpayed.component';
import { ChatCoachMyorderComponent } from './chat-coach-myorder/chat-coach-myorder.component';
import { CheckFeedbackMycoachComponent } from './check-feedback-mycoach/check-feedback-mycoach.component';
import { GetNotifOrdersstatusChangesComponent } from './get-notif-ordersstatus-changes/get-notif-ordersstatus-changes.component';
import { LoginComponent } from './login/login.component';
import { OrderPackComponent } from './order-pack/order-pack.component';
import { PickMethodPaymentComponent } from './pick-method-payment/pick-method-payment.component';
import { SeeCoachMyorderComponent } from './see-coach-myorder/see-coach-myorder.component';
import { SeeHowMuchProfileReadyComponent } from './see-how-much-profil-ready/see-how-much-profil-ready.component';
import { SeeListAgentsPayComponent } from './see-list-agents-pay/see-list-agents-pay.component';
import { SeeListMyresumesComponent } from './see-list-myresumes/see-list-myresumes.component';
import { SeeOrdersComponent } from './see-orders/see-orders.component';
import { SeeProfilComponent } from './see-profil/see-profil.component';
import { SendFeedbackAdminComponent } from './send-feedback-admin/send-feedback-admin.component';
import { SignUpComponent } from './signup/signup.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VideoChatCoachMyorderComponent } from './video-chat-coach-myorder/video-chat-coach-myorder.component';
import { ForgotPasswordComponent } from './forget-password/forget-password.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SeeAvailablePacksComponent } from './see-available-packs/see-available-packs.component';

@NgModule({
  declarations: [
    CancelOrderNotpayedComponent,
    ChatCoachMyorderComponent,
    CheckFeedbackMycoachComponent,
    GetNotifOrdersstatusChangesComponent,
    LoginComponent,
    OrderPackComponent,
    PickMethodPaymentComponent,
    SeeCoachMyorderComponent,
    SeeHowMuchProfileReadyComponent,
    SeeListAgentsPayComponent,
    SeeListMyresumesComponent,
    SeeOrdersComponent,
    SeeProfilComponent,
    SendFeedbackAdminComponent,
    SignUpComponent,
    UploadResumeComponent,
    VerifyEmailComponent,
    VideoChatCoachMyorderComponent,
    ForgotPasswordComponent,
    UserProfilComponent,
    
    SendFeedbackAdminComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ]
})
export class UserModule { }
