export function showNewBlock(blockSHow, blockNone) {

    blockNone.classList.add('none');
    blockSHow.classList.remove('fadeOut');
    blockSHow.classList.add('show');

    setTimeout(() => blockSHow.classList.add('fadeIn'), 200);
    setTimeout(() => blockSHow.classList.remove('none'), 100);
    setTimeout(() => blockNone.classList.add('fadeOut'), 200);
    setTimeout(() => blockNone.classList.remove('fadeIn'), 200);
}

