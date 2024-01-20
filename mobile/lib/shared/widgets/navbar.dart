import 'package:flutter/material.dart';

///
/// Appbar widget
///
class Navbar extends StatelessWidget implements PreferredSizeWidget {
  const Navbar({super.key, this.title, this.actions});
  final String? title;
  final List<Widget>? actions;

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(title ?? 'Finder'),
      actions: [
        ...(actions ?? []),
        IconButton(
          onPressed: () {
            debugPrint('notifiation fire');
          },
          icon: const Icon(Icons.notifications),
        )
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
