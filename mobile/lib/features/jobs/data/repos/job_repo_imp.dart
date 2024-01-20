import 'package:dartz/dartz.dart';
import 'package:graphql/src/core/query_options.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/core/typedef/typedef.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';
import 'package:mobile/features/jobs/business/repos/job_repo.dart';
import 'package:mobile/features/jobs/data/datasource/job_datasource_api.dart';
import 'package:mobile/features/jobs/data/models/job_model.dart';

class JobRepoImp extends JobRepo {
  final JobDatasourceApi _jobDatasourceApi;
  JobRepoImp(this._jobDatasourceApi);

  ///
  /// Fetch all jobs
  @override
  FutureResult<List<JobModel>> getJobs(
      QueryOptions<Object?> queryOptions) async {
    try {
      final result = await _jobDatasourceApi.getJobs(queryOptions);
      return Right(result);
    } on GraphQLError catch (error) {
      return Left(Failure(message: error.message, statusCode: 400));
    }
  }

  @override
  FutureResult<JobEntity> createJob(MutationOptions? mutationOptions) async {
    try {
      final result = await _jobDatasourceApi.createJob(mutationOptions!);
      return Right(result);
    } on GraphQLError catch (error) {
      return Left(Failure(message: error.message, statusCode: 400));
    }
  }
}
