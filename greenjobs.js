
/**
 * This file contains functions that deals with Green Jobs data set
 * Created by MGY on 9/29/2015.
 */
/*globals _, greenjobs */
/*exported  testData ,listIndustries, countyGreenJobs, jobswithKeyword */
/**
 * A variable name testData that holds a certain amount of Green Jobs data
 * @type {Array.<T>}
 */
var testData = greenjobs.splice(0, 10);

/**
 * Plucks greenjobs dataset of industry and delete duplicates
 * @param The greenjobs data
 * @returns {*} : Array of greenjob industry
 */
function listIndustries(data){
  return _.uniq(_.pluck(data, 'Industry'));
}

/**
 * Returns the total number of greenjobs in the county
 * @param The greenjobs data
 * @returns {*} An object with the county and their total amount of greenjobs
 */
function countyGreenJobs(data){
  return _.countBy(data,function(num){
    return num['County'];
  });
}

/**
 * Returns list of jobs given a desired keyword
 * @param data : the greenjobs data
 * @param keyword : the job title
 * @returns {*} : An array of jobs that has a job title keyword
 */

function jobswithKeyword(data, keyword){
  var jobs = _.filter(data, function(num){ return num['Job Title'].indexOf(keyword) !== -1; });

  return _.pluck(jobs, 'Job Title');
}

console.log(listIndustries(testData));
console.log(countyGreenJobs(testData));
console.log(jobswithKeyword(testData, 'PV'));