import { createSignal } from 'solid-js';

export interface ICredit {
  reason: string;
  result: number;
}

const [credits, setCredits] = createSignal<ICredit[]>([
  { reason: '辱骂敬爱的李校长', result: -10 },
  { reason: '在食堂消费', result: 1 },
  { reason: '揭发翻墙出校学生', result: 1 },
  { reason: '围墙漏洞上报', result: 1 },
  { reason: '将他人外卖丢入垃圾桶', result: 1 },
]);

const creditsStore = { credits, setCredits };

export default creditsStore;
