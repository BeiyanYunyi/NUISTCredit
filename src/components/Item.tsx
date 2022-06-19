import { Component, createSignal, Show } from 'solid-js';
import creditsStore, { ICredit } from '../utils/creditsStore';
import Button from './Button';
import Panel from './Panel';

const Item: Component<{ credit: ICredit; index: number }> = (props) => {
  const [del, setDel] = createSignal(false);
  return (
    <Show
      when={!del()}
      fallback={
        <Panel>
          <div class="text-sm flex flex-row gap-1 item-center">
            <p>要删除吗</p>
            <Button
              classList={{ 'px-2': true }}
              onClick={(e) => {
                e.preventDefault();
                creditsStore.setCredits((credit) => credit.filter((b, i) => i !== props.index));
              }}
            >
              确定
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setDel(false);
              }}
              classList={{ 'px-2': true }}
            >
              取消
            </Button>
          </div>
        </Panel>
      }
    >
      <Panel>
        <div
          class="flex flex-row justify-around items-center gap-2 text-sm cursor-pointer"
          onClick={() => {
            setDel(true);
          }}
        >
          <p class="flex-grow">{props.credit.reason}</p>
          <p>
            {props.credit.result > 0 && '+'}
            {props.credit.result.toFixed(1)}
          </p>
        </div>
      </Panel>
    </Show>
  );
};

export default Item;
