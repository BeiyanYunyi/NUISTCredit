import { useNavigate } from 'solid-app-router';
import { Component, createSignal, For, onCleanup } from 'solid-js';
import Logo from '../assets/logo.svg';
// import Header from '../components/Header';
import { getyyyyMMddHHmmss } from '../utils/time';
import creditsStore from '../utils/creditsStore';

const Result: Component = () => {
  const [date, setDate] = createSignal(new Date());
  const intervalID = setInterval(() => {
    setDate(new Date());
  }, 1000);
  onCleanup(() => clearInterval(intervalID));
  const total = () =>
    creditsStore
      .credits()
      .map((cre) => cre.result)
      .reduce((pre, cur) => pre + cur, 0);
  const navigate = useNavigate();
  return (
    <>
      {/* <Header title="Credit" /> */}
      <main>
        <div class="mx-auto mt-4 flex max-w-7xl flex-col gap-4 w-[4.5cm]">
          <img
            src={Logo}
            class="filter saturate-0"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          />
          <p class="font-serif text-center ">校园信用小票</p>
          <div class="font-serif flex flex-col gap-0">
            <For each={creditsStore.credits()}>
              {(credit) => (
                <div class="flex flex-row justify-around items-center gap-2 text-sm">
                  <p class="flex-grow">{credit.reason}</p>
                  <p>
                    {credit.result > 0 && '+'}
                    {credit.result.toFixed(1)}
                  </p>
                </div>
              )}
            </For>
          </div>
          <div class="flex flex-row justify-around font-serif">
            <p class="flex-grow">合计</p>
            <p>
              {total() > 0 && '+'}
              {total().toFixed(1)}
            </p>
          </div>
          <p class="flex-grow text-sm font-serif">
            以上是你 {date().getMonth() + 1} 月份的 School Credit 小结
            <br />
            咨询电话：58736110
          </p>
          <p class="flex-grow font-serif">{getyyyyMMddHHmmss(date())}</p>
        </div>
      </main>
    </>
  );
};

export default Result;
