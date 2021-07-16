export { 
    find,
    findById,
    create,
    findByIdAndDelete
}


const skills = [
    {text: 'Express', difficult: true, id: 123456},
    {text: 'Javascript', difficult: true, id: 123457},
    {text: 'CSS', difficult: true, id: 123458}
]


function create(skill, callback) {
  // Add the id (random)
  skill._id = Date.now() % 1000000
  // Set new todos as false
  skill.done = false
  console.log(skill)
  skills.push(skill)
  return callback(null, skill)
}


const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}