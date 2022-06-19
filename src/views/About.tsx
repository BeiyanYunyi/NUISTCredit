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
            <h1>🔐 School Credit</h1>
            <p>为你的小票打印机（咕咕机）生成一个可供打印的网页</p>
          </article>
        </Panel>
      </div>
    </main>
  </>
);

export default About;
