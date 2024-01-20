import 'package:dartz/dartz.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/core/typedef/typedef.dart';
import 'package:mobile/core/usecases/usecase.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';
import 'package:mobile/features/jobs/business/repos/job_repo.dart';

///
/// Create new job
class CreateJobUseCase extends UseCase<JobEntity, MutationOptions> {
  final JobRepo _jobRepo;
  CreateJobUseCase(this._jobRepo);
  @override
  FutureResult<JobEntity> call({MutationOptions? params}) async {
    return await _jobRepo.createJob(params!);
  }
}
