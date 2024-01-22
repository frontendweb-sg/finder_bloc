import 'package:dio/dio.dart';
import 'package:get_it/get_it.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/graphql/config.dart';
import 'package:mobile/core/utils/dio_client.dart';
import 'package:mobile/features/auth/business/repos/auth_repo.dart';
import 'package:mobile/features/auth/data/datasource/auth_datasource_api.dart';
import 'package:mobile/features/auth/data/repos/auth_repo_imp.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_bloc.dart';
import 'package:mobile/features/jobs/business/repos/job_repo.dart';
import 'package:mobile/features/jobs/data/datasource/job_datasource_api.dart';
import 'package:mobile/features/jobs/data/repos/job_repo_imp.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_bloc.dart';

final sl = GetIt.instance;
final getIt = GetIt.instance;

void initializeDeps() {
  // dio initialize
  DioClient dio = DioClient();
  getIt.registerSingleton(dio.client);
  getIt.registerSingleton<AuthDatasourceApi>(AuthDatasourceApi(getIt()));
  getIt.registerSingleton<AuthRepo>(AuthRepoImp(getIt()));
  getIt.registerFactory<AuthBloc>(() => AuthBloc(getIt()));

  // graphql
  GraphQlConfig graphQlConfig = GraphQlConfig();
  sl.registerSingleton<GraphQLClient>(graphQlConfig.init());

  // jobs
  sl.registerSingleton<JobDatasourceApi>(JobDatasourceApi(sl())); // datasource
  sl.registerSingleton<JobRepo>(JobRepoImp(sl())); // repository

  // jobs bloc
  sl.registerFactory<JobBloc>(() => JobBloc(sl()));
}
