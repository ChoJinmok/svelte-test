/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */

import { writable } from 'svelte/store';

// export let storeName = '';
// -> writable를 사용하지 않고 위와 같이 내보내면 수정이 불가능하다.
// -> illegal reassignment to import 'storeName' (잘못된 재할당)

export let storeName = writable('Jinmok');
// writable은 쓰기 가능한 svelte store 객체가 반환된다.

// Svelte store는 writable외에 readable(읽기 전용), derived(계산된 데이터), get(스토어 객체의 값을 바로 뽑아줌) 등을 제공

export const xx = 'xx';
