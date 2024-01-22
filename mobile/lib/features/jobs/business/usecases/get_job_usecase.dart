import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/usecases/usecase.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';
import 'package:mobile/features/jobs/business/repos/job_repo.dart';

///
/// Get jobs
class GetJobUseCase extends UseCase<List<JobEntity>, QueryOptions> {
  final JobRepo _jobRepo;
  GetJobUseCase(this._jobRepo);

  @override
  FutureResult<List<JobEntity>> call(QueryOptions? params) async {
    return await _jobRepo.getJobs(params!);
  }
}
