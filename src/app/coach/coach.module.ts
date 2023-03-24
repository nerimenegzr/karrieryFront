import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoachRoutingModule } from './coach-routing.module';
import { LoginComponent } from './login/login.component';
import { ChatAdminComponent } from './chat-admin/chat-admin.component';
import { ConfirmFeedbackOrderComponent } from './confirm-feedback-order/confirm-feedback-order.component';
import { MsgUserRequestComponent } from './msg-user-request/msg-user-request.component';
import { NotifNewfolderComponent } from './notif-newfolder/notif-newfolder.component';
import { PickOneOrderWorkOnComponent } from './pick-one-order-work-on/pick-one-order-work-on.component';
import { SaveDraftVersionComponent } from './save-draft-version/save-draft-version.component';
import { SaveArchiveFeedbackComponent } from './save-archive-feedback/save-archive-feedback.component';
import { SeeListAdminsComponent } from './see-list-admins/see-list-admins.component';
import { SeeListTransactionsComponent } from './see-list-transactions/see-list-transactions.component';
import { SeeListUsersComponent } from './see-list-users/see-list-users.component';
import { SeeMybalanceComponent } from './see-mybalance/see-mybalance.component';
import { SeePayedRequestComponent } from './see-payed-request/see-payed-request.component';
import { SeeProfilComponent } from './see-profil/see-profil.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { SendWirthdrawToDoAdminComponent } from './send-wirthdraw-to-do-admin/send-wirthdraw-to-do-admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    ChatAdminComponent,
    ConfirmFeedbackOrderComponent,
    MsgUserRequestComponent,
    NotifNewfolderComponent,
    PickOneOrderWorkOnComponent,
    SaveDraftVersionComponent,
    SaveArchiveFeedbackComponent,
    SeeListAdminsComponent,
    SeeListTransactionsComponent,
    SeeListUsersComponent,
    SeeMybalanceComponent,
    SeePayedRequestComponent,
    SeeProfilComponent,
    UpdatePasswordComponent,
    UpdateProfilComponent,
    SendWirthdrawToDoAdminComponent,

  ],
  imports: [
    CommonModule,
    CoachRoutingModule, 
     BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
providers: [],
bootstrap:  [CoachModule]
})
export class CoachModule { }
