import mongoose from 'mongoose'
var Schema = mongoose.Schema

var examsSchema = new Schema({
  id: String,
  course_id: String,
  course_code: String,
  campus: String,
  period: String,
  date: Date,
  start_time: Number,
  end_time: Number,
  duration: Number,
  sections: [{
    lecture_code: String,
    exam_section: String,
    location: String
  }]
})

examsSchema.index({ course_code: 'text', campus: 'text', period: 'text' })

export default mongoose.model('exams', examsSchema)