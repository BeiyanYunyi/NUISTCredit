import GhIcon from '@sicons/ionicons5/LogoGithub.svg';
import { Component } from 'solid-js';
import Header from '../components/Header';
import Panel from '../components/Panel';

const About: Component = () => (
  <>
    <Header title="关于" />
    <main>
      <div class="mx-auto max-w-7xl py-6 px-6 lg:px-8">
        <Panel prose>
          <article>
            <h1>🔐 NUIST Credit</h1>
            <p>为你的小票打印机（咕咕机）生成一个可供打印的网页</p>
            <h2>📝 说明</h2>
            <p>有什么说明的必要吗？（恼）</p>
            <ul>
              <li>主页点击各项可删除</li>
              <li>生成后的页面点击校徽可以返回主页</li>
            </ul>
            <p>
              欢迎来 Star：
              <a href="https://github.com/lixiang810/NUISTCredit" target="_blank">
                <img class="inline !m-0 h-8 w-8" src={GhIcon} />
              </a>
            </p>
          </article>
        </Panel>
      </div>
    </main>
  </>
);

export default About;
