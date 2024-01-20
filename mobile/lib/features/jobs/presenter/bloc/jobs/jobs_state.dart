import 'dart:math';

import 'package:equatable/equatable.dart';
import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';

abstract class JobState extends Equatable {
  const JobState();
  @override
  List<Object?> get props => [];
}

final class JobsInitial extends JobState {}

final class JobsLoading extends JobState {}

final class JobsSuccess extends JobState {
  final List<JobEntity> jobs;
  const JobsSuccess(this.jobs);

  @override
  List<Object?> get props => [jobs];
}

final class JobFailed extends JobState {
  final Failure failure;
  const JobFailed(this.failure);
  @override
  List<Object?> get props => [failure];
}
