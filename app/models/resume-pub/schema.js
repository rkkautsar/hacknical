import mongoose from '../mongoose';

const Schema = mongoose.Schema;

const ResumePubSchema = new Schema({
  userId: String,
  maxView: Number,
  resumeHashV0: String,
  resumeHash: String,
  openShare: { type: Boolean, default: true },
  useGithub: { type: Boolean, default: true },
  template: { type: String, default: 'v1' },
  github: {
    hotmap: { type: Boolean, default: true },
    info: { type: Boolean, default: true },
    repos: { type: Boolean, default: true },
    languages: { type: Boolean, default: true },
    commits: { type: Boolean, default: true },
    orgs: { type: Boolean, default: true },
    course: { type: Boolean, default: true },
    contributed: { type: Boolean, default: true },
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

export default mongoose.model('ResumePub', ResumePubSchema);
