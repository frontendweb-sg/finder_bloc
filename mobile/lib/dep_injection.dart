import 'package:get_it/get_it.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/graphql/config.dart';
import 'package:mobile/features/jobs/business/repos/job_repo.dart';
import 'package:mobile/features/jobs/data/datasource/job_datasource_api.dart';
import 'package:mobile/features/jobs/data/repos/job_repo_imp.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_bloc.dart';

final sl = GetIt.instance;

void initializeDeps() {
  // graphql
  GraphQlConfig graphQlConfig = GraphQlConfig();

  sl.registerSingleton<GraphQLClient>(graphQlConfig.init());

  // jobs
  sl.registerSingleton<JobDatasourceApi>(JobDatasourceApi(sl())); // datasource
  sl.registerSingleton<JobRepo>(JobRepoImp(sl())); // repository
  // sl.registerLazySingleton(() => GetJobUseCase(sl())); // usecases

  // jobs bloc
  sl.registerFactory(() => JobBloc(sl()));
}
