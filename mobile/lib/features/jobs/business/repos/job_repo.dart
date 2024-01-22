import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/utils/typedef.dart';

import 'package:mobile/features/jobs/business/entities/job_entity.dart';

///
/// interface class for job
///
abstract class JobRepo {
  FutureResult<List<JobEntity>> getJobs(QueryOptions queryOptions);
  FutureResult<JobEntity> createJob(MutationOptions mutationOptions);
}
