import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';

abstract class JobState {
  final Failure? failure;
  final List<JobEntity>? jobs;
  final JobEntity? job;
  JobState({this.jobs, this.failure, this.job});
}

final class JobsInitial extends JobState {}

final class JobsLoading extends JobState {}

final class JobsSuccess extends JobState {
  JobsSuccess(List<JobEntity> jobs) : super(jobs: jobs);
}

final class JobFailed extends JobState {
  JobFailed(Failure failure) : super(failure: failure);
}
