export function mergeSortAnim(array) {
    const anim = [];
    if (array.length <= 1) return array;
    const aux = array.slice();
    Sort(array, 0, array.length - 1, aux, anim);
    return anim;
  }
  
  function Sort(array, start, end, aux, anim) {
    if (start === end) return;
    const middle = Math.floor((start + end) / 2);
    Sort(aux, start, middle, array, anim);
    Sort(aux, middle + 1, end, array, anim);
    Merge(array, start, middle, end, aux, anim);
  }
  
  function Merge(array, start, middle, end, aux, anim) {
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
      anim.push([i, j]);
      anim.push([i, j]);
      if (aux[i] <= aux[j]) {
        anim.push([k, aux[i]]);
        array[k++] = aux[i++];
      } else {
        anim.push([k, aux[j]]);
        array[k++] = aux[j++];
      }
    }
    while (i <= middle) {
      anim.push([i, i]);
      anim.push([i, i]);
      anim.push([k, aux[i]]);
      array[k++] = aux[i++];
    }
    while (j <= end) {
      anim.push([j, j]);
      anim.push([j, j]);
      anim.push([k, aux[j]]);
      array[k++] = aux[j++];
    }
  }