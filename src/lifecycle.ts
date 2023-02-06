// 모듈: 특정한 로직을 외부에서 독립적으로 관리해서 사용하는 것 -> 반복적으로 사용할 수 있다.
// 라이프사이클의 모듈화: 라이프사이클을 외부 모듈로 만들어서 어디서든지 자유롭게 사용

import {
  onMount, onDestroy, beforeUpdate, afterUpdate,
} from 'svelte';
import { writable } from 'svelte/store';

const { log } = console;

export function lifecycle() {
  onMount(() => {
    log('Mounted');
  });

  onDestroy(() => {
    log('Before Destroy!');
  });

  beforeUpdate(() => {
    log('Before update!');
  });

  afterUpdate(() => {
    log('After Update');
  });
}

export function delayRender({ delay = 3000 }: { delay?: number } = {}) {
  // 일반 변수가 반응성을 가지려면 컴포넌트 안에서 선언되어야 한다.
//   let render = false;
  const render = writable(false);

  onMount(() => {
    setTimeout(() => {
    //   render = true;
    // `$`는 svelte확장자에서만 사용가능하다.
    //   $render = true;
    // render -> store 객체는 set, update, subscribe 메서드를 가진다.
    // 자동 구독: `$`, 수동 구독: subscribe
      render.set(true);
    }, delay);
  });

  return render;
}
