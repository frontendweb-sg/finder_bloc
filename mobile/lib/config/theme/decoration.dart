import 'package:flutter/material.dart';
import 'package:mobile/config/theme/colors.dart';

InputDecoration inputDecoration(
  BuildContext context, {
  String? hintText,
  IconData? icon,
  Widget? iconEnd,
}) {
  return InputDecoration(
    prefixIcon: Icon(icon),
    suffixIcon: iconEnd,
    hintText: hintText,
    border: const OutlineInputBorder(
      borderSide: BorderSide(
          color: AppColor.colorPrimary, style: BorderStyle.solid, width: 2),
    ),
  );
}
