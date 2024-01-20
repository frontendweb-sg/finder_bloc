import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';
import 'package:mobile/features/jobs/business/repos/job_repo.dart';
import 'package:mobile/features/jobs/business/usecases/get_job_usecase.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_event.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_state.dart';

class JobBloc extends Bloc<JobEvent, JobState> {
  final JobRepo _jobRepo;
  JobBloc(this._jobRepo) : super(JobsInitial()) {
    on<GetJobs>(_getJobs);
  }

  void _getJobs(JobEvent event, Emitter<JobState> emit) async {
    try {
      emit(JobsLoading());

      final response = await GetJobUseCase(_jobRepo).call();
      print('response $response');
      response.fold(
        (l) => addError(JobFailed(l)),
        (r) => JobsSuccess([] as List<JobEntity>),
      );
    } on Failure catch (error) {
      emit(JobFailed(error));
    }
  }

  @override
  void onChange(Change<JobState> change) {
    super.onChange(change);
    print('Jobs state ---- $change');
  }
}
