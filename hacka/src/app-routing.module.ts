import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HowDoYouFeelComponent } from './app/how-do-you-feel/how-do-you-feel.component';
import { WhyDoYouFeelComponent } from './app/why-do-you-feel/why-do-you-feel.component';
import { ResultsHowDoYouFeelComponent } from './app/results-how-do-you-feel/results-how-do-you-feel.component';
import { HomeComponent } from './app/home/home.component';
import { AboutFaqComponent } from './app/about-faq/about-faq.component'
import { DataComponent } from './app/data/data.component';
import { RecognizeEmotionsComponent } from './app/recognize-emotions/recognize-emotions.component';
import { LoginComponent } from './app/login/login.component';
import { SignUpComponent } from './app/sign-up/sign-up.component';
import { FacialRecognitionComponent } from './app/facial-recognition/facial-recognition.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'how-do-you-feel', component: HowDoYouFeelComponent },
  { path: 'why-do-you-feel/:emotion', component: WhyDoYouFeelComponent },
  { path: 'results-how-do-you-feel/:emotion/:id', component: ResultsHowDoYouFeelComponent },
  { path: 'recognize-emotions', component: RecognizeEmotionsComponent },
  { path: 'facial-recognition', component: FacialRecognitionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-faq', component: AboutFaqComponent },
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'results-you-feel', component: ResultsHowDoYouFeelComponent },
  { path: 'data', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }