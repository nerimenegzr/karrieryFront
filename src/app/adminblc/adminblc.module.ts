import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminblcRoutingModule } from './adminblc-routing.module';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddOnePackComponent } from './add-one-pack/add-one-pack.component';
import { AuthantiNewOrderAddComponent } from './authanti-new-order-add/authanti-new-order-add.component';
import { BeCoachComponent } from './be-coach/be-coach.component';
import { BeUserComponent } from './be-user/be-user.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { ChatWithCoachComponent } from './chat-with-coach/chat-with-coach.component';
import { CheckCoachProfilComponent } from './check-coach-profil/check-coach-profil.component';
import { CheckUserProfileComponent } from './chec-user-profil/chec-user-profil.component';
import { ConfirmCoachPaymentComponent } from './confirm-coach-payment/confirm-coach-payment.component';
import { CreateAdminsComponent } from './create-admins/create-admins.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';
import { DoEverythingComponent } from './do-everything/do-everything.component';
import { LoginComponent } from './login/login.component';
import { ManagingComponent } from './managing/managing.component';
import { SeeListAgentsComponent } from './see-list-agents/see-list-agents.component';
import { SeeListCoachesComponent } from './see-list-coachs/see-list-coachs.component';
import { SeeListPacksComponent } from './see-list-packs/see-list-packs.component';
import { SeeListRequestsComponent } from './see-list-requests/see-list-requests.component';
import { SeeListUsersComponent } from './see-list-users/see-list-users.component';
import { SeeTransactionsComponent } from './see-transactions/see-transactions.component';
import { UpdateOnePackComponent } from './update-one-pack/update-one-pack.component';
import { VerifyOrderPaymentComponent } from './verify-order-payment/verify-order-payment.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CheckAdminProfileComponent } from './check-admin-profil/check-admin-profil.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AddAgentComponent,
    AddOnePackComponent,
    AuthantiNewOrderAddComponent,
    BeCoachComponent,
    BeUserComponent,
    CancelOrderComponent,
    ChatWithCoachComponent,
    CheckCoachProfilComponent,
    CheckUserProfileComponent,
    ConfirmCoachPaymentComponent,
    CreateAdminsComponent,
    DeleteAgentComponent,
    DoEverythingComponent,
    LoginComponent,
    ManagingComponent,
    SeeListAgentsComponent,
    SeeListCoachesComponent,
    SeeListPacksComponent,
    SeeListRequestsComponent,
    SeeListUsersComponent,
    SeeTransactionsComponent,
    UpdateOnePackComponent,
    VerifyOrderPaymentComponent,
    CheckAdminProfileComponent,
    
  ],
  imports: [
    CommonModule,
    AdminblcRoutingModule,
    ReactiveFormsModule,
       FormsModule,
       HttpClientModule,
      
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AdminblcModule { }
