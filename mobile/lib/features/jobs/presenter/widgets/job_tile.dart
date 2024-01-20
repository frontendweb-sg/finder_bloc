import 'package:flutter/material.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';

class JobTile extends StatelessWidget {
  const JobTile({
    super.key,
    required this.job,
  });

  final JobEntity job;
  @override
  Widget build(BuildContext context) {
    return Dismissible(
      direction: DismissDirection.startToEnd,
      background: Container(
        alignment: Alignment.centerLeft,
        color: Colors.red,
        child: const Icon(
          Icons.delete,
        ),
      ),
      key: ValueKey(job),
      onDismissed: (DismissDirection direction) {
        print('hi');
      },
      child: Container(
        padding: const EdgeInsets.all(15.0),
        color: Colors.white,
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [Text(job.title!)],
        ),
      ),
    );
  }
}
