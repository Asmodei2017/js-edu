/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let ability = config[focus];
      const progBasics = 1300;
      const programmer = 800; 
      if(knowsProgramming === true){
        return Math.ceil(programmer / ability);
      }      
      return Math.ceil(progBasics / ability);
  };
  