import 'package:dartz/dartz.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/typedef/typedef.dart';
import 'package:mobile/features/jobs/data/models/job_model.dart';

abstract class IJobDatasourceApi {
  Future<List<JobModel>> getJobs(QueryOptions queryOptions);
}

class JobDatasourceApi implements IJobDatasourceApi {
  final GraphQLClient _client;

  JobDatasourceApi(this._client);

  @override
  Future<List<JobModel>> getJobs(QueryOptions<Object?> queryOptions) async {
    try {
      final result = await _client.query(queryOptions);

      print('result $result');
      final List<dynamic> data = result.data!['getJobs'];
      return data.map((e) => JobModel.fromJson(e)).toList();
    } on GraphQLError catch (error) {
      return throw Exception(error);
    }
  }
}
