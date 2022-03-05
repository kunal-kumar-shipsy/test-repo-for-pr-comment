const camel_case_expected = (() => {
    return 'Kya kar raha hai bhai tu'
});


const ThisIsHowItsDone = (() => {
    // Logic that will definately fail.
    camel_case_expected();
});