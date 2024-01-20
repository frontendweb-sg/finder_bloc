import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_bloc.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_state.dart';
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
          return ListView.builder(
            itemCount: 3,
            itemBuilder: (itemBuilder, index) => const ListTile(
              title: Text('hello'),
            ),
          );
        },
      ),
    );
  }
}
