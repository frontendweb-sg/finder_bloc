import 'package:dartz/dartz.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/typedef/typedef.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';
import 'package:mobile/features/jobs/data/models/job_model.dart';

abstract class IJobDatasourceApi {
  Future<List<JobModel>> getJobs(QueryOptions queryOptions);
  Future<JobModel> createJob(MutationOptions mutationOptions);
}

class JobDatasourceApi implements IJobDatasourceApi {
  final GraphQLClient _client;

  JobDatasourceApi(this._client);

  @override
  Future<List<JobModel>> getJobs(QueryOptions<Object?> queryOptions) async {
    try {
      print(queryOptions.document.definitions);
      final result = await _client.query(queryOptions);

      print('rrrrr-----${(result)}');

      final List<dynamic> data = result.data!['jobs'];
      return data.map((e) => JobModel.fromJson(e)).toList();
    } on ServerException catch (error) {
      print('error $error');
      throw Exception(error);
    }
  }

  @override
  Future<JobModel> createJob(MutationOptions<Object?> mutationOptions) async {
    try {
      final result = await _client.mutate(mutationOptions);
      Map<String, dynamic> data = result.data!['createJob'];
      return JobModel.fromJson(data);
    } on GraphQLError catch (error) {
      throw Exception(error);
    }
  }
}
