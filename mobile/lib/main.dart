import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/dep_injection.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_bloc.dart';
import 'package:mobile/features/jobs/presenter/bloc/jobs/jobs_event.dart';
import 'package:mobile/features/jobs/presenter/pages/job_screen.dart';

void main() {
  initializeDeps(); // desp initialize
  runApp(
    const MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<JobBloc>(
          create: (context) => sl()
            ..add(
              GetJobs(
                QueryOptions(
                  document: gql(r'''

'''),
                ),
              ),
            ),
        )
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        home: const JobScreen(),
      ),
    );
  }
}
