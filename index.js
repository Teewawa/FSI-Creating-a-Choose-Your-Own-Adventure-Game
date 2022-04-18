//Your Code here
let firstAnswer = window.prompt(
  "Do you head left or right? (Input: left or right)"
);
console.log(firstAnswer === "left");
//Set firstAnswer input to lower case for condition check
firstAnswer = firstAnswer.toLowerCase();
//firstAnswer input: left
if (firstAnswer === "left") {
  let secondAnswer = window.prompt(
    `You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path? (Input: follow or continue)`
  );
  //Set secondAnswer input to lower case for condition check
  secondAnswer = secondAnswer.toLowerCase();
  //secondAnswer input: follow
  if (secondAnswer === "follow") {
    let thirdAnswer = window.prompt(
      `You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should window.alert the world to this magical safe haven. (Input: stay or spread the word)`
    );
    //Set thirdAnswer input to lower case for condition check
    thirdAnswer = thirdAnswer.toLowerCase();
    //thirdAnswer input: stay
    if (thirdAnswer === "stay") {
      window.alert(
        `You live happily amongst the cats for the rest of your days.`
      );
      //thirdAnswer input: spread the word
    } else if (thirdAnswer === "spread the word") {
      window.alert(
        `After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.`
      );
      //Invalid entry for thirdAnswer: stay or spread the word
    } else {
      window.alert(`Invalid entry. Valid input: stay or spread the word`);
    }
    //secondAnswer input: continue
  } else if (secondAnswer === "continue") {
    let thirdAnswer = window.prompt(
      `You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? (Input: ladder or staircase)`
    );
    //Set thirdAnswer input to lower case for condition check
    thirdAnswer = thirdAnswer.toLowerCase();
    //thirdAnswer input: ladder
    if (thirdAnswer === "ladder") {
      window.alert(
        `After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`
      );
      //thirdAnswer input: staircase
    } else if (thirdAnswer === "staircase") {
      window.alert(
        `After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`
      );
      //Invalid entry for thirdAnswer: ladder or staircase
    } else {
      window.alert(`Invalid entry. Valid input: ladder or staircase`);
    }
    //Invalid entry for secondAnswer: follow or continue
  } else {
    window.alert(`Invalid entry. Valid input: follow or continue`);
  }
  //firstAnswer input: right
} else if (firstAnswer === "right") {
  let secondAnswer = window.prompt(
    `You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take? (Input: past the dragon or away from the dragon)`
  );
  //Set secondAnswer to lower case for condition check
  secondAnswer = secondAnswer.toLowerCase();
  //secondAnswer input: past the dragon
  if (secondAnswer === "past the dragon") {
    let thirdAnswer = window.prompt(
      `The dragon wakes up and sits upright. You only have a moment to respond, to stay or run: (Input: stay or run)`
    );
    //thirdAnser input: stay
    if (thirdAnswer === "stay") {
      window.alert(
        `You and the dragon have an uplifting conversation about local politics and become lifelong friends.`
      );
      //thirdAnswer input: run
    } else if (thirdAnswer === "run") {
      window.alert(
        `Quickly, you run back to the cave's entrance. Sheepish, you return home.`
      );
      //Invalid entry for thirdAnswer: stay or run
    } else {
      window.alert(`Invalid entry. Valid input: stay or run`);
    }
    //secondAnswer input: away from the dragon
  } else if (secondAnswer === "away from the dragon") {
    let thirdAnswer = window.prompt(
      `After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? (Input: draw it or pick it)`
    );
    //Set thirdAnswer to lower case for conditional check
    thirdAnswer = thirdAnswer.toLowerCase();
    //thirdAnswer input: draw it
    if (thirdAnswer === "draw it") {
      window.alert(
        `You draw the flower, capturing only a fraction of its beauty with yourquill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`
      );
      //thirdAnswer input: pick it
    } else if (thirdAnswer === "pick it") {
      window.alert(
        `You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`
      );
      //Invalid entry for thirdAnswer: draw it or pick it
    } else {
      window.alert(`Invalid entry. Valid input: draw it or pick it`);
    }
    //Invalid entry for secondAnswer: past the dragon or away from the dragon
  } else {
    window.alert(
      `Invalid entry. Valid input: past the dragon or away from the dragon`
    );
  }
  //Invalid entry for firstAnswer: left or right
} else {
  window.alert(`Invalid entry. Valid input: left or right`);
}
