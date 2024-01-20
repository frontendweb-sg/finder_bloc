import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_bloc.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_state.dart';
import 'package:mobile/features/jobs/presenter/widgets/job_tile.dart';
import 'package:mobile/shared/widgets/navbar.dart';

class JobScreen extends StatelessWidget {
  const JobScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const Navbar(),
      body: BlocBuilder<JobBloc, JobState>(
        builder: (context, state) {
          if (state is JobsLoading) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          if (state is JobFailed) {
            return const Center(
              child: Text('error'),
            );
          }
          if (state is JobFailed) {
            ScaffoldMessenger.of(context)
                .showSnackBar(const SnackBar(content: Text('error')));
          }
          if (state is JobsSuccess) {
            return ListView.separated(
              separatorBuilder: (context, index) {
                return const Divider(
                  color: Color.fromARGB(255, 225, 225, 225),
                );
              },
              itemCount: state.jobs.length,
              itemBuilder: (itemBuilder, index) => JobTile(
                job: state.jobs[index],
              ),
            );
          }
          return const Center(
            child: Text("No content"),
          );
        },
      ),
    );
  }
}
