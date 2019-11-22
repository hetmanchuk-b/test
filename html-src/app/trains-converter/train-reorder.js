$(function () {
  let $svg = $('svg');
  let $paths = $svg.find('path');

  let $borders = $paths.filter((item, el) => {
    let d = $(el).attr('d');
    return d && d.match('c-2.9,0-5') || d.match('c2.9');
  });

  let $dashes = $paths.filter((item, el) => {
    let d = $(el).attr('d');

    return d && d.match('6-3.5') || d.match('0c-0.8,0-1.4-0.6');
    return d && d.match('22c0');
  });

  let $texts = $('text').filter((item, el) => {
    return !!parseInt($(el).text())
  });

  console.log($texts.length, $dashes.length, $borders.length);

  let dashesInfo = [];
  let textsInfo = [];
  let bordersInfo = [];
  let combinedInfo = [];

  $texts.each(function () {
    let pos = $(this).position();

    textsInfo.push({ $el: $(this), x: pos.left, y: pos.top })
  });

  $borders.each(function () {
    let isDashOnTheRight = !!$(this)
      .attr('d')
      .match('c-2.9');
    let pos = $(this).position();
    bordersInfo.push({ $el: $(this), x: pos.left, y: pos.top, w: 40, isDashOnTheRight: isDashOnTheRight })
  });

  $dashes.each(function () {
    let pos = $(this).position();

    dashesInfo.push({ $el: $(this), x: pos.left, y: pos.top });
  });

  bordersInfo.forEach((item) => {
    let el = {
      dash: {},
      border: {},
      text: {}
    };

    let textsDiff = textsInfo.map(textItem => {
      let deltaX = textItem.x - item.x;
      deltaX = deltaX < 0
        ? Infinity
        : deltaX;

      let deltaY = textItem.y - item.y;
      deltaY = deltaY < 0
        ? Infinity
        : deltaY;

      return {
        delta: (deltaX + deltaY) / 2,
        deltaX: item.x - textItem.x,
        deltaY: textItem.y - item.y,
        x: `textX: ${textItem.x} itemX: ${item.x} ${textItem.y} ${item.y}`,

        item: textItem.$el[0]
      }
    });

    let dashesDiff = dashesInfo.map(dashItem => {
      let deltaX = !item.isDashOnTheRight
        ? item.x - dashItem.x
        : item.x - dashItem.x + item.w;

      deltaX = deltaX < 0
        ? Infinity
        : deltaX;

      let deltaY = !item.isDashOnTheRight
        ? dashItem.y - item.y
        : item.y - dashItem.y;
      deltaY = (deltaY < 0 && deltaY < -0.01)
        ? Infinity
        : deltaY;

      return {
        delta: (deltaX + deltaY) / 2,
        dashItemX: dashItem.x,
        dashItemY: dashItem.y,
        isDashOnTheRight: item.isDashOnTheRight,
        itemX: item.x,
        itemY: item.y,
        deltaX: deltaX,
        deltaY: deltaY,
        item: dashItem.$el[0]
      }
    });

    combinedInfo.push({ borderItem: item.$el, textsDiff: textsDiff, dashesDiff: dashesDiff });
  });

  combinedInfo.forEach((item) => {
    item
      .textsDiff
      .sort(deltaSorter);
    item
      .dashesDiff
      .sort(deltaSorter);

    item.bestText = item.textsDiff[0];
    item.bestDash = item.dashesDiff[0];
  });

  combinedInfo.forEach((item) => {
    let combinedGroup = makeSVGEl('rect', { className: 'train-svg' })
    // let combinedGroup = makeSVGEl('g', { className: 'train-svg' })
    let seatNumber = parseInt(item.bestText.item.innerHTML);

    //"\\
    //\/"
    //classname="[^"]+"[^"]+""[^"]+""[^"]+""[^"]+""[^"]+""[^"]+""[^"]+""[^"]+""[^"]+""
    //onclick="\{props\.handleClick\}" 
    //^\s+\n

    // replace
    //classname="[^"]+"
    // with
    //className="[^"]+"

    combinedGroup.setAttribute('className',
      `\\{(availableSeats.includes('${seatNumber}') ? 
      (selectedSeats.includes('${seatNumber}') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'}/`)
    combinedGroup.setAttribute('onClick', `\\{() => props.handleClick('${seatNumber}')}/`)


    item.borderItem[0].removeAttribute('classname');
    item.borderItem[0].setAttribute('className', 'train-seat__border');

    item.bestDash.item.removeAttribute('classname');
    item.bestDash.item.setAttribute('className', 'train-seat__dash');

    // item.bestText.item.removeAttribute('classname)');
    item.bestText.item.setAttribute('className', 'train-seat__text');
    item.bestText.item.removeAttribute('onclick');

    // item.bestText.item.setAttribute('className', 'train-seat__border');
    // item.bestText.item.removeAttribute('classname');

    $('text').each(function (ind, el) {
      let clName = el.getAttribute('classname');
      if (el.getAttribute('classname') && !clName.match(/\(/)) {
        el.setAttribute('className', el.getAttribute('classname'));
        el.removeAttribute('classname');
      }
    });

    $(combinedGroup)
      .prepend(item.borderItem)
      .prepend(item.bestText.item)
      .prepend(item.bestDash.item);

    $('svg > g')
      .first()
      .append(combinedGroup);
  });

  killEmptyTags();
  killEmptyTags();
  killEmptyTags();
  killEmptyTags();

  console.log(combinedInfo.filter(item => {
    return parseInt(item.bestText.item.innerHTML) === 1
  }))
  // console.log(combinedInfo);
});

function makeSVGEl(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (var k in attrs) {
    el.setAttribute(k, attrs[k]);
  }
  return el;
}

function deltaSorter(a, b) {
  if (a.delta < b.delta) {
    return -1;
  }
  if (a.delta > b.delta) {
    return 1;
  }
  // a должно быть равным b
  return 0;
}

function killEmptyTags() {
  $('svg g').each((ind, el) => {
    if (!el.innerHTML || el.innerHTML.match(/^\s+$/))
      $(el).remove();
  }
  )
}

/*




*/