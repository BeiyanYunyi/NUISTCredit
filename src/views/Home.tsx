import { useNavigate } from 'solid-app-router';
import { Component, createSignal, For } from 'solid-js';
import Button from '../components/Button';
import Header from '../components/Header';
import Item from '../components/Item';
import Panel from '../components/Panel';
import creditsStore, { ICredit } from '../utils/creditsStore';

const Home: Component = () => {
  const addCredit = (credit: ICredit) => {
    creditsStore.setCredits((credits) => credits.concat(credit));
  };
  const [reason, setReason] = createSignal('');
  const [result, setResult] = createSignal(0);
  const total = () =>
    creditsStore
      .credits()
      .map((cre) => cre.result)
      .reduce((pre, cur) => pre + cur, 0);
  const navigate = useNavigate();
  return (
    <>
      <Header title="NUIST Credit" />
      <main>
        <div class="mx-auto max-w-7xl py-6 px-6 lg:px-8">
          <div class="flex flex-col gap-2">
            <For each={creditsStore.credits()}>
              {(credit, index) => <Item credit={credit} index={index()} />}
            </For>
            <Panel>
              <div class="flex flex-row justify-around items-center gap-2 text-sm">
                <p class="flex-grow">合计</p>
                <p>{total}</p>
              </div>
            </Panel>
            <Panel>
              <form class="flex flex-col gap-2">
                <div class="flex flex-row justify-around gap-2">
                  <textarea
                    class="flex-grow rounded-lg p-2"
                    style={{ resize: 'none' }}
                    placeholder="发生甚么事了"
                    value={reason()}
                    onInput={(e) => {
                      setReason(e.currentTarget.value);
                    }}
                  />
                  <input
                    class="rounded-lg p-2"
                    type="number"
                    value={result()}
                    onInput={(e) => {
                      setResult(Number(e.currentTarget.value));
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    addCredit({ reason: reason(), result: result() });
                  }}
                >
                  添加
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/result');
                  }}
                >
                  生成
                </Button>
              </form>
            </Panel>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
