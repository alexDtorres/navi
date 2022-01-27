import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'navi';
  src: string = `mkdir azagent;cd azagent;curl -fkSL -o vstsagent.tar.gz https://vstsagentpackage.azureedge.net/agent/2.196.2/vsts-agent-linux-x64-2.196.2.tar.gz;tar -zxvf vstsagent.tar.gz; if [ -x "$(command -v systemctl)" ]; then ./config.sh --environment --environmentname "DEV" --acceptteeeula --agent $HOSTNAME --url https://dev.azure.com/l2ee/ --work _work --projectname 'Factoring' --auth PAT --token __token__ --runasservice; sudo ./svc.sh install; sudo ./svc.sh start; else ./config.sh --environment --environmentname "DEV" --acceptteeeula --agent $HOSTNAME --url https://dev.azure.com/l2ee/ --work _work --projectname 'Factoring' --auth PAT --token __token__; ./run.sh; fi`;
}
